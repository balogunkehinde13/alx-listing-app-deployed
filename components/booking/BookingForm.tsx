import CancellationPolicy from "./CancellationPolicy";

const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>First Name</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Email</label>
          <input type="email" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label>Card Number</label>
        <input type="text" className="border p-2 w-full mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>CVV</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label>Street Address</label>
        <input type="text" className="border p-2 w-full mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>City</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>State</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>Country</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Submit Button */}
      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Confirm & Pay
      </button>
    </form>

    {/* Cancellation Policy */}
    <CancellationPolicy />

    {/* Ground Rules */}
    <section className="mt-6 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Ground Rules</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Follow the house rules.</li>
        <li>Treat your Host’s home like your own.</li>
        <li>No smoking or parties.</li>
        <li>Respect quiet hours between 10 PM and 7 AM.</li>
      </ul>
    </section>
  </div>
);

export default BookingForm;
