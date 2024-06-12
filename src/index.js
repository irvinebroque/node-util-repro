import jws from 'jws';

export default {
	async fetch(request, env, ctx) {
		const signature = jws.sign({
			header: { alg: 'HS256' },
			payload: 'h. jon benjamin',
			secret: 'has a van',
		  });

		return new Response('Hello World!');
	},
};
