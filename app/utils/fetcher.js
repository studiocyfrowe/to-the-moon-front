import axios from "axios";

export default function fetcher(url, token) {
    axios
      .get(url, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then((res) => res.data);
}