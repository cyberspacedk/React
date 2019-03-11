import React, { Component } from "react";
import "./pagination.css";

export default class Pagination extends Component {
  render() {
    const {
      currentPage,
      totalPage,
      handleCurrentPage,
      handleNavigation,
			prevButton,
			nextButton,
    } = this.props;

    return (
      <div className="pagination-box">

        <button
          className="prev-page pagination-controls"
          data-nav="prev"
          onClick={handleNavigation}
          disabled={prevButton}
        >
          Previous page
        </button>

        <div className="pagination-controls">
          <input
            className="current-page"
            type="text"
            value={currentPage}
            onChange={handleCurrentPage}
          />
          <span className="total-page"> {totalPage} </span>
        </div>

        <button
          className="next=page pagination-controls"
          data-nav="next"
          onClick={handleNavigation}
          disabled={nextButton}
        >
          Next page
        </button>
				
      </div>
    );
  }
}
