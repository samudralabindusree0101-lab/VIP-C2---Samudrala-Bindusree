// export const getAllBanners = async (req, res) => {
//   try {
//     const banners = await Banner.find();
//     res.json(banners[0]?.image || '');
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch banners' });
//   }
// };

import { Admin } from '../models/Schema.js';

export const getAllBanners = async (req, res) => {
  try {
    const banners = await Admin.find();

    res.json(banners[0]?.banner || '');
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed to fetch banners'
    });
  }
};