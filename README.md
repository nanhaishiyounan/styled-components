## Example

<!-- prettier-ignore -->
```JSX
import styled from '@xmly/styled-components';

// rem以设计稿375px为基准
const Title = styled.View`
  width: 100rem;
  height: 50vh;
`;

const Wrapper = styled.View`
  width: ${{
    320: '100rem',
    375: '200rem',
    750: '375rem'
  }}
`;


<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```

```JSX
import { View, Dimensions, StyleSheet, Text } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Title = styled.View`
  width: ${windowWidth * 100 / 375}px;
  height: ${windowHeight * 0.5}px;
`;

const Wrapper = styled.View`
  width: ${(props => props.isSE ? windowWidth * 100 / 375 : windowWidth * 200 / 375)}px
`;


<Wrapper isSE={true}>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```
