import StyledComponent from './styles';

import CursorChanger from '@/components/modules/CursorChanger';
import Container from '@/components/layout/Container';
import NavigationBar from '@/components/modules/NavigationBar';
import ContentSection from '@/components/modules/ContentSection';

function Home() {
    return (
        <StyledComponent className='page-home'>
            <CursorChanger />
            <Container className='container'>
                <NavigationBar />
                <ContentSection />
            </Container>
        </StyledComponent>
    )
}

export default Home;
