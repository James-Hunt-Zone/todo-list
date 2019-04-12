import React from "react";
import { TodoVisibilityFilters } from "../actions";
import FilterButton from "../containers/FilterButton";

const Filters = () => {
  return (
    <div>
      <FilterButton filterType={TodoVisibilityFilters.SHOW_ALL}>
        All
      </FilterButton>
      <FilterButton filterType={TodoVisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterButton>
      <FilterButton filterType={TodoVisibilityFilters.SHOW_ACTIVE}>
        Not Completed
      </FilterButton>
    </div>
  );
};

export default Filters;
