import React from "react";
import PropTypes from "prop-types";
import UserItem from "../User-item/UserItem";

import "./user-list.css";

const UserList = ({ userData }) => {
  return (
    <ul>
      {userData.map((elem) => (
        <UserItem title={elem.title} text={elem.text} key={elem.title} />
      ))}
    </ul>
  );
};



UserList.propTypes = {

	userData : PropTypes.arrayOf(

		PropTypes.shape({

			text: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			
		})

	)
}

export default UserList;
