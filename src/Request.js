//import React from "react";
//
//
//function Request() {
//  const email = user.email;
//  const password = user.password;
//
//  const handleSubmit = (event) => {
//    console.log(`
//      Email: ${email}
//      Firstname: ${firstname}
//      Comment: ${comment}
//      Accepted Terms: ${acceptedTerms}
//    `);
//
//    event.preventDefault();
//  }
//
//  return (
//    <form onSubmit={handleSubmit}>
//      <h1>Create Account</h1>
//
//      <label>
//        Email:
//        <input
//          name="email"
//          type="email"
//          value={email}
//          onChange={e => setEmail(e.target.value)}
//          required />
//      </label>
//
//      <label>
//        Password:
//        <input
//          name="password"
//          type="password"
//          value={password}
//          onChange={e => setPassword(e.target.value)}
//          required />
//      </label>
//
//      <label>
//        Country:
//        <select
//          name="country"
//          value={country}
//          onChange={e => setCountry(e.target.value)}
//          required>
//          <option key=""></option>
//          {product.map(country => (
//            <option key={country}>{country}</option>
//          ))}
//        </select>
//      </label>
//
//      <label>
//        <input
//          name="acceptedTerms"
//          type="checkbox"
//          onChange={e => setAcceptedTerms(e.target.value)}
//          required />
//        I accept the terms of service
//      </label>
//
//      <button>Submit</button>
//    </form>
//  );
//}
//
//export default Request;