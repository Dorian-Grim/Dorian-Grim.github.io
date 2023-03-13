export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.deaf24f6.js","imports":["_app/immutable/entry/start.deaf24f6.js","_app/immutable/chunks/index.847936d9.js","_app/immutable/chunks/singletons.8fa4c693.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.32661bcc.js","imports":["_app/immutable/entry/app.32661bcc.js","_app/immutable/chunks/index.847936d9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
