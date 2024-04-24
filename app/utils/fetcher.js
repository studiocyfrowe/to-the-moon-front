import axios from "axios";

export default function fetcher(url, token) {
    axios
      .get(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data);
}