'use client';

import styled from '@emotion/styled';
import Onboarding from '../components/Onboarding';

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export default function Home() {
  return (
    <Container>
      <main>
        <Onboarding />
      </main>
    </Container>
  );
}
