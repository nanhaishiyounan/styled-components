## Example

<!-- prettier-ignore -->
```JSX
import styled from '@xmly/styled-components';

// rem以设计稿375px为基准
const Title = styled.View`
  width: 100rem;
  height: 50vh;
`;

const Wrapper = styled.section`
  width: ${{
    320: '100rem',
    375: '200rem',
    750: '375rem'
  }}
`;

// Use them like any other React component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```
