import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironOptions } from 'config';
import { ISession } from 'pages/api/index';
export default withIronSessionApiRoute(sendVerifyCode, ironOptions);

async function sendVerifyCode(req: NextApiRequest, res: NextApiResponse) {
  const session: ISession = req.session;
  const { to = '', templateId = '1' } = req.body;
  console.log('to', to);
  console.log('templateId', templateId);

  // 这里只考虑成功
  session.verifyCode = '123456';
  // 正常是保存在redis里，这里保存到内存中，用户获取验证码服务端会存一份，和用户输入的进行对比，一样则登录
  await session.save();

  res.status(200).json({
    code: 0,
    msg: '成功',
    data: {},
  });
}
