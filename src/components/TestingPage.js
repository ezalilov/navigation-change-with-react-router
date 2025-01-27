import { Container, Row } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import ExitDialog from "./ExitDialog";

const TestingPage = () => {
  const history = useHistory();
  const [triggerExit, setTriggerExit] = useState({
    onOk: false,
    path: "",
  });
  const [isVisibleDialog, setVisibleDialog] = useState(false);

  const handleGoToIntendedPage = useCallback(
    (location) => history.push(location),
    [history]
  );

  useEffect(() => {
    debugger;
    if (triggerExit.onOk) {
      handleGoToIntendedPage(triggerExit.path);
    }
    const unblock = history.block((location) => {
      if (location.pathname !== "/testing") {
        setVisibleDialog(true);
      }
      setTriggerExit((obj) => ({ ...obj, path: location.pathname }));
      if (triggerExit.onOk) {
        return true;
      }
      return false;
    });

    return () => {
      unblock();
    };
  }, [handleGoToIntendedPage, history, triggerExit.onOk, triggerExit.path]);
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <h1>
            Testing for Triggering Alert Dialog if you tried to press back
            button on your browser or click another navigation tab
          </h1>
        </Row>
      </Container>
      <ExitDialog
        visible={isVisibleDialog}
        onClose={() => setVisibleDialog(false)}
        onOk={() => {
          setTriggerExit((obj) => ({
            ...obj,
            onOk: true,
          }));
          setVisibleDialog(false);
        }}
      />
    </>
  );
};

export default TestingPage;
