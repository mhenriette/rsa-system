import { omitBy, isNil } from "lodash";

class Utils {
  secrets = {
    client_id: null,
    client_secret: null,
  };

  token = {
    access: null,
    refresh: null,
  };

  state = {
    isLoggedIn: false,
  };

  /**
   * Formats the query object into a string
   * @param {string} param query parameters
   * @return {string}
   */
  getQueryString = (param: any) => {
    if (!param) return "";

    if (param && typeof param != "object")
      throw new TypeError("Filter parameters should be of type object.");

    if (param.limit && !param.offeset) param.offeset = 0;

    return Object.entries(omitBy(param, isNil))
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  };

  /**
   * Validates if a number is a rwandan phone
   * @param {string} number phone number to validate
   * @return {boolean}
   */
  isPhoneNumber = (number: any) => {
    const errors = {
      format: false,
    };

    // Check it's a string
    // -----------------------------------------
    if (typeof number !== "string") {
      throw new Error("Input should be string");
    }

    const re = /^(\+?25)?(078|079|075|073|072)\d{7}$/;
    if (!re.test(number)) {
      return errors.format;
    }
    return true;
  };

  /**
   * cheks SDK secrets availability
   * @return {void}
   */
  checkSecrets = () => {
    if (!this.secrets.client_id) {
      throw new Error({
        message: "Client id is required to authenticate.",
      } as any);
    }

    if (!this.secrets.client_secret) {
      throw new Error({
        message: "Client secret is required to authenticate.",
      } as any);
    }
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Utils()