import { useContext, useState } from "react";
import ServiceNav from "../../Shared/ServiceNav";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import RequestTable from "../../Shared/RequestTable";
import Swal from "sweetalert2";

const AgentAddMoney = () => {
  const [filter, setFilter] = useState("All");
  const { user } = useContext(AuthContext);
  const { data: Requests = [], refetch: reload } = useQuery({
    queryKey: ["Requests", filter],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/AgentRequests${user.number}?filter=${filter}`
      );
      return res.data;
    },
  });
  const RequestConfirmation = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you want to confirm this request ???",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axios.patch(
          `http://localhost:5000/RequestConfirmation${id}`
        );
        console.log(result);
        if (result.status == 200) {
          reload();
          Swal.fire({
            title: "Successful!",
            text: result.data.message,
            icon: "success",
          });
        }
      }
    });
  };
  const DeleteRequest = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you want to Delete this request ???",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axios.delete(
          `http://localhost:5000/RequestDelete${id}`
        );
        console.log(result);
        if (result.status == 200) {
          reload();
          Swal.fire({
            title: "Successful!",
            text: result.data.message,
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="">
      <ServiceNav service={"Add money Request"} />
      <RequestTable
        Requests={Requests}
        DeleteRequest={DeleteRequest}
        RequestConfirmation={RequestConfirmation}
        setFilter={setFilter}
      />
    </div>
  );
};

export default AgentAddMoney;
