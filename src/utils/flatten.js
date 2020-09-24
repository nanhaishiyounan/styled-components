// @flow
import hyphenate from 'fbjs/lib/hyphenateStyleName'
import React from 'react'
// eslint-disable-next-line flowtype-errors/show-errors
import { Dimensions } from 'react-native'
import isPlainObject from './isPlainObject'
import StyledError from './error'
import type { Interpolation } from '../types'

const windowWidth = Dimensions.get('window').width

export const objToCss = (obj: Object, prevKey?: string): string => {
  const sortKeys = Object.keys(obj).sort()
  const isMedia = !sortKeys.some(k => /\D/g.test(k))
  const ruleArray = Object.keys(obj)
    .filter(key => {
      const chunk = obj[key]
      return (
        chunk !== undefined && chunk !== null && chunk !== false && chunk !== ''
      )
    })
    .map(key => {
      if (isMedia) {
        const mediaWidth =
          sortKeys.find(w => w >= windowWidth) || sortKeys[sortKeys.length - 1]
        return `${obj[mediaWidth]}`
      }
      if (isPlainObject(obj[key])) {
        return objToCss(obj[key], key)
      }
      return `${hyphenate(key)}: ${obj[key]};`
    })
  if (isMedia) {
    return ruleArray[0]
  } else {
    return prevKey
      ? `${prevKey} {
  ${ruleArray.join(' ')}
}`
      : ruleArray.join(' ')
  }
}

const flatten = (
  chunks: Array<Interpolation>,
  executionContext: ?Object
): Array<Interpolation> => {
  const result = chunks.reduce(
    (ruleSet: Array<Interpolation>, chunk: ?Interpolation) => {
      /* Remove falsey values */
      if (
        chunk === undefined ||
        chunk === null ||
        chunk === false ||
        chunk === ''
      ) {
        return ruleSet
      }

      /* Flatten ruleSet */
      if (Array.isArray(chunk)) {
        ruleSet.push(...flatten(chunk, executionContext))
        return ruleSet
      }

      /* Handle other components */
      if (chunk.hasOwnProperty('styledComponentId')) {
        // $FlowFixMe not sure how to make this pass
        ruleSet.push(`.${chunk.styledComponentId}`)
        return ruleSet
      }

      /* Either execute or defer the function */
      if (typeof chunk === 'function') {
        if (executionContext) {
          const nextChunk = chunk(executionContext)
          /* Throw if a React Element was given styles */
          if (React.isValidElement(nextChunk)) {
            const elementName = chunk.displayName || chunk.name
            throw new StyledError(11, elementName)
          }
          ruleSet.push(...flatten([nextChunk], executionContext))
        } else ruleSet.push(chunk)

        return ruleSet
      }

      /* Handle objects */
      ruleSet.push(
        // $FlowFixMe have to add %checks somehow to isPlainObject
        isPlainObject(chunk) ? objToCss(chunk) : chunk.toString()
      )

      return ruleSet
    },
    []
  )
  return result
}
export default flatten
