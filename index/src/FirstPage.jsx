import './FirstPage.css';
import { Container, Row, Col } from 'react-bootstrap';

function FirstPage() {
    return (
        <Container fluid className='Data-Content d-none d-lg-block'>
            <Row className='mt-4'>
                <Col xl={2} lg={2} className='data ps-5 ps-xl-5 ps-lg-0'>
                    <h1 className='letter'>
                        <span className='e-letter'>E</span>
                        COURSES
                    </h1>
                </Col>
                    <Col lg={1} xl={2} className='data text-xl-end text-lg-end ps-5 ps-xl-5 ps-lg-5 ps-md-5 d-none d-lg-block'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" fill="#FF6600" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                    </Col>
                    <Col lg={3} xl={2} className='data  d-none d-lg-block'>
                        <h6 className='l-data pe-5 pe-xl-5 pe-lg-5'>
                            Our Office
                        </h6>
                        <small className='text-center'>
                            123 Street, New York, USA
                        </small>
                    </Col>
                <Col xl={1} lg={1} className='data text-end d-none d-lg-block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" fill="#FF6600" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                </Col>
                <Col xl={2} lg={2} className='data d-none d-lg-block'>
                    <h6 className='l-data'>
                        Email Us
                    </h6>
                    <small>
                        info@example.com
                    </small>
                </Col>
                <Col xl={1} lg={1} className='data text-end d-none d-lg-block'>
                    <svg viewBox="0 0 512 512" width='35' height="40" fill='#FF6600' xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z" />
                    </svg>
                </Col>
                <Col xl={2} lg={2} className='data d-none d-lg-block'>
                    <h6 className='l-data'>
                        Call Us
                    </h6>
                    <small>
                        +012 345 6789
                    </small>
                </Col>
            </Row>
        </Container>
    );
};

export default FirstPage;