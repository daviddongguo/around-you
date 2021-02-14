import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/api/advertisings',async (req: Request, res: Response) => {
  const title = 'Guarana Technology';
  const body = 'Guaraná Technologies is a top mobile app development agency based in Canada, with offices in Montreal and Toronto.We specialize in building native iOS and Android applications, building over 40 apps every year.';
  const website = {url: 'https://www.guarana-technologies.com/', text: 'Website of Guarana'};
		return res.status(200).send({title, body, website});
});

export {
  router as indexOfAdvertising
};

