//Author - Ruchika.
import axios from "axios";

const BASE_URL = "https://cook-with-dal-a3.onrender.com/api";

const ApiHandler = {
  getRecipeOptions: function () {
    return axios.get(`${BASE_URL}/shopping-list/options`);
  },
  getShoppingLists: function (email) {
    return axios.get(`${BASE_URL}/shopping-list/lists?email=${email}`);
  },
  createShoppingLists: function (requestBody) {
    return axios.post(`${BASE_URL}/shopping-list/lists`, requestBody);
  },
  updateShoppingLists: function (requestBody) {
    return axios.put(
      `${BASE_URL}/shopping-list/lists/${requestBody.id}`,
      requestBody
    );
  },
  deleteShoppingLists: function (requestBody) {
    return axios.delete(`${BASE_URL}/shopping-list/lists/${requestBody.id}`, {
      data: requestBody,
    });
  },
};

export default ApiHandler;
