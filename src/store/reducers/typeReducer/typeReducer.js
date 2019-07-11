import {
  SET_FORGE_TOKEN,
  SET_CURR_PACKAGE,
  SET_CURR_PROJECT,
  SET_ACTIVE_PACKAGE,
  SET_CURR_REQUISITION,
  SET_CURR_STYLE
} from "../../actions/actionTypes/actionTypes";

const initialState = {
  types: [],
  styles: [],
  isProj: false,
  isPck: false,
  isSt: false,
  currentRequisition: {},
  currentProject: {},
  currentPackage: {},
  activePackage: {},
  currentStyle: {},
  forgeToken: {}
};

export default (state = initialState, action) => {
  const {
    type,
    forgeToken,
    currentProject,
    currentPackage,
    activePackage,
    currentRequisition,
    currentStyle
  } = action;

  switch (type) {
    case SET_ACTIVE_PACKAGE:
      return {
        ...state,
        activePackage
      };
    case SET_CURR_REQUISITION:
      return {
        ...state,
        currentRequisition
      };
    case SET_CURR_PROJECT:
      return {
        ...state,
        isProj: true,
        isPck: false,
        isSt: false,
        currentProject,
        currentPackage: {}
      };
    case SET_CURR_PACKAGE:
      return {
        ...state,
        isProj: false,
        isPck: true,
        isSt: false,
        currentPackage
      };
    case SET_CURR_STYLE:
      return {
        ...state,
        isProj: false,
        isPck: false,
        isSt: true,
        currentStyle
      };
    case SET_FORGE_TOKEN:
      return {
        ...state,
        forgeToken
      };

    default:
      return state;
  }
};
