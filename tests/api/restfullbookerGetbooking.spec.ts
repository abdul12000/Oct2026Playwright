import { test, expect } from '@playwright/test';

test('Get booking by id and validate response', async ({ request }) => {
  // Send GET request
  const response = await request.get('https://restful-booker.herokuapp.com/booking/1');

  // Assert status code
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  // Parse response body
  const booking = await response.json();

  console.log(booking);

    // Assert response body values
    expect(booking.firstname).toBe('Jim');
      expect(booking.lastname).toBe('Jackson');
      expect(booking.totalprice).toBe(571);
       expect(booking.depositpaid).toBe(false);
      expect(booking.bookingdates.checkin).toBe('2021-03-10');

  // Assert response structure
  expect(booking).toHaveProperty('firstname');
  expect(booking).toHaveProperty('lastname');
  expect(booking).toHaveProperty('totalprice');
  expect(booking).toHaveProperty('depositpaid');
  expect(booking).toHaveProperty('bookingdates');

  // Assert data types
  expect(typeof booking.firstname).toBe('string');
  expect(typeof booking.lastname).toBe('string');
  expect(typeof booking.totalprice).toBe('number');
  expect(typeof booking.depositpaid).toBe('boolean');

  // Assert nested object
  expect(booking.bookingdates).toHaveProperty('checkin');
  expect(booking.bookingdates).toHaveProperty('checkout');

    // Assert data types
  expect(typeof booking.bookingdates.checkin).toBe('string');
  expect(typeof booking.bookingdates.checkout).toBe('string');
});
