import { NextApiRequest, NextApiResponse } from 'next';

export default async function sendVerifyCode(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { to = '', templateId = '1' } = req.body;
  console.log('to', to);
  console.log('templateId', templateId);

  res.status(200).json({
    code: 0,
    data: 123,
  });
}
