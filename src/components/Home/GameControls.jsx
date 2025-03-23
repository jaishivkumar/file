import { Container, Row, Col, Button } from "react-bootstrap"

const GameControls = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <div className="position-relative" style={{ height: "180px" }}>
            {/* Game Platform Image */}
            <div className="w-100 h-100 d-flex justify-content-center">
              <img src="/assets/img/funds/2d.png" alt="Game platform" className="h-100 object-fit-contain" />
            </div>

            {/* Game Controls */}
            <div className="position-absolute bottom-0 start-0 end-0 d-flex justify-content-between p-3">
              {/* Movement Controls */}
              <div className="d-flex flex-column align-items-center">
                <div className="d-grid" style={{ gridTemplateColumns: "40px 40px", gap: "4px" }}>
                  <Button
                    variant="secondary"
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "40px" }}
                  >
                    W
                  </Button>
                  <Button
                    variant="secondary"
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "40px" }}
                  >
                    A
                  </Button>
                  <Button
                    variant="secondary"
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "40px" }}
                  >
                    S
                  </Button>
                  <Button
                    variant="secondary"
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "40px" }}
                  >
                    D
                  </Button>
                </div>
                <div className="text-white small mt-1">Move</div>
              </div>

              {/* Jump Controls */}
              <div className="d-flex flex-column align-items-center">
                <Button
                  variant="secondary"
                  className="d-flex align-items-center justify-content-center"
                  style={{ width: "120px", height: "40px" }}
                >
                  SPACE
                </Button>
                <div className="text-white small mt-1">Jump and Double Jump</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default GameControls

