import React, { useCallback } from 'react'
import { useNavigate } from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function HomeScreen() {
    const navigate = useNavigate()
    const submitHandler = useCallback(()=>{
        navigate("/search")
    },[])
  return (
    <div>
        <Card>
      <Card.Body style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", minHeight: "80vh", fontWeight: "bolder"}}>
        <Card.Title style={{borderBottom: "1px solid blue"}}>Bello Travels</Card.Title>
        <Card.Text style={{maxWidth: "500px", margin: "0 2rem", textAlign: "center", lineHeight: "1.5rem", fontWeight: "bold"}}>
        Welcome to our Bello Travels, where the world is your playground! We offer a one-stop-shop for all your travel needs, whether you're looking to book a car travel or even an adventure tour. With our easy-to-use platform and user-friendly interface, planning your dream vacation has never been easier.

Explore our vast selection of destinations, from the kanon dabo to the majestic Kontagora town. Our team of expert travel advisors is available 24/7 to assist you in finding the perfect itinerary and to help you save money on your next trip.

We understand that traveling can be stressful, which is why we have streamlined the booking process to make it as seamless as possible. With our secure payment system and instant booking confirmation, you can rest assured that your travel plans are in good hands.

Join our loyalty program to receive exclusive discounts and rewards on your future bookings. And with our flexible cancellation policies, you can book with confidence knowing that your plans can change at any time.

Don't let life pass you by.
        </Card.Text>
        <Button variant="primary" onClick={submitHandler}>start planning your next adventure with us today!</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

