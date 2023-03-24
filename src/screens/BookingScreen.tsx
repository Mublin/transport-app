import { PaystackButton } from 'react-paystack'
import { useParams, Navigate } from "react-router-dom";
import { data } from "../data";
import { callback } from 'react-paystack/dist/types';
import { useState, ChangeEvent } from 'react';
import Form from "react-bootstrap/Form"

export default function BookingScreen() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const {id, journey} = useParams();
    const route = data.journeys.find(drive=> drive.Route === journey)
    const rides = route?.available.find(ride => ride._id === Number(id))
    const config ={
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: rides ? rides.Price * 100 : 0,
        publicKey: "pk_test_bdae6e992538ff698b264317e823fc9274bd793c"
      }
      const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        alert("closed")
        // console.log('closed')
      }
      
      
      const handlePaystackSuccessAction = (reference: string) => {
        // Implementation for whatever you want to do with reference and after success call.
        window.alert("Payment Successful")
        
      }
      
      const componentProps = {
          ...config,
          text: 'Paystack Payment Gateway',
          onSuccess: (reference: string): void => handlePaystackSuccessAction(reference),
          onClose: handlePaystackCloseAction,
      };
  return (
    <div>
        {route ? rides ? (<div>
            <p>Organization: {rides.brand}</p>
            <p>Travel: {rides.carType}</p>
            <p>Price: NGN{rides.Price}</p>
            <p>Take-off Time: {rides.TakeOff}</p>
            <p>Description: {rides.description}</p>
        </div>) : <p>No journey available</p> : <Navigate to="/search" />}
        {route ? rides ? <Form style={{ maxWidth: "85dvw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <h2>Passenger Information</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" required minLength={5} onChange={(e: ChangeEvent<HTMLInputElement>)=> setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required onChange={(e: ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)} />
      </Form.Group>
      {email.length > 5 && name.length > 5 &&  <PaystackButton {...componentProps as { 
            text: string;
            onSuccess: callback;
            onClose: () => void;
            reference: string;
            email: string;
            amount: number;
            publicKey: string;
        }} />}
    </Form> : <></> : <></> } 
    </div>
  )
}
