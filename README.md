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
