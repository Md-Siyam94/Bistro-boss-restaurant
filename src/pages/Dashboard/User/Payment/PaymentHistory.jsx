import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../provider/useAuth";
import useAxiosSecure from "../../../../provider/useAxiosSecure";
import SectionTitle from "../../../../component/SectionTitle";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ["payments", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
            <div>
                <SectionTitle heading={"Payment History"} subHeading={"Your Payment History"}></SectionTitle>
            </div>
            <div>
                <h2 className="text-3xl">Total Payments: {payments.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>Total Price</th>
                                <th>Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                       {
                        payments.map((payment, index)=>  <tr  key={payment._id}  >
                                <td>{index + 1}</td>
                                <td>{payment?.email}</td>
                                <td>{payment?.transacitonId}</td>
                                <td>{payment?.price}</td>
                                <td>{payment?.status}</td>
                            </tr>       
                        )
                       }
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;