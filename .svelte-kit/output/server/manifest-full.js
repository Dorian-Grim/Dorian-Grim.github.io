export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.f9742acd.js","imports":["_app/immutable/entry/start.f9742acd.js","_app/immutable/chunks/index.847936d9.js","_app/immutable/chunks/singletons.bd6fd6a5.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.a46de7f9.js","imports":["_app/immutable/entry/app.a46de7f9.js","_app/immutable/chunks/index.847936d9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
