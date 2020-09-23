import React from "react";
import PropTypes from "prop-types";
import { deleteTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";

const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);
    M.toast({ html: `${tech.firstName} ${tech.lastName} deleted from techs` });
  };

  return (
    <li className="collection-item" onClick={onDelete}>
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
