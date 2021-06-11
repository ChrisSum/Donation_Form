import { useState } from "react";
import "./styles.css";

export default function App() {
  // Number of donors
  const [donors, setDonors] = useState(0);
  // Amount being donated at any given submission
  const [donationAmount, setDonationAmount] = useState("");
  // Cumulative total for donations
  const [dollarsFunded, setDollarsFunded] = useState(0);
  // Max for progress bar
  const max = 5000;

  // Submitting using Give Now button
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert for amount < $5
    if (donationAmount < 5) {
      alert("Donation must be $5.00 or more.");
    } else {
      // Update number of donors
      setDonors((donors) => donors + 1);
      // Update total amount raised
      setDollarsFunded(
        (dollars) => parseInt(dollars, 10) + parseInt(donationAmount, 10)
      );
      // Clears the submission box
      setDonationAmount("");
    }
  };

  // Updates the donation amount in submission box
  const handleChange = (event) => {
    setDonationAmount(event.target.value);
  };

  return (
    <div className="wrapper">
      <div class="bar-label">
        {dollarsFunded >= 5000 ? (
          <span>Goal Completed!</span>
        ) : (
          <span>${5000 - dollarsFunded} left to complete the goal.</span>
        )}
      </div>
      <progress value={dollarsFunded} max={max} />
      <div class="raised">${dollarsFunded} raised!</div>
      <form>
        <fieldset>
          <label>
            <h1>
              Only four days left to <br></br>fund this project
            </h1>
            <p>
              Join the {donors} other donors who have already supported this
              project.
            </p>
            <div class="input-box">
              <span class="prefix">$</span>
              <input
                type="number"
                name="amount"
                min="5"
                placeholder="5.00"
                value={donationAmount}
                onChange={handleChange}
                required
              />
            </div>
            <button
              disabled={donationAmount === ""}
              type="submit"
              onClick={handleSubmit}
            >
              Give Now
            </button>
          </label>
        </fieldset>
      </form>
    </div>
  );
}
