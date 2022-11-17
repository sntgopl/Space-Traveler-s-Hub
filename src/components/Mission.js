import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Mission = ({
  name, description, id, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        {name}
      </td>
      <td>{description}</td>
      <td>
        {!reserved && (
          <Badge bg="secondary">Non-Active</Badge>
        )}
        {reserved && (
          <Badge bg="primary">Active</Badge>
        )}
      </td>
      <td>
        {!reserved && (
        <Button
          onClick={() => dispatch(joinMission(id))}
          variant="outline-secondary"
        >
          Join Mission
        </Button>
        )}
        {reserved && (
        <Button
          onClick={() => dispatch(leaveMission(id))}
          variant="outline-danger"
        >
          Join Mission
        </Button>
        )}

      </td>
    </tr>
  );
};

Mission.propTypes = {
  name: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  reserved: PropTypes.node.isRequired,
};

export default Mission;
