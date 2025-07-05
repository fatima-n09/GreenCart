import Address from "../models/address.js";

// Add address: POST /api/address/add
export const addAddress = async (req, res) => {
  try {
    const { address } = req.body;
    const userId = req.userId; // get from auth middleware

    await Address.create({ ...address, userId }); // ✅ correct spread

    res.json({ success: true, message: "Address added successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
// Get address: GET /api/address/get
export const getAddress = async (req, res) => {
  try {
    const userId = req.userId; 
    const addresses = await Address.find({ userId });

    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
