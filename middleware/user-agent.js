export default function (context) {
	context.userAgent = context.isServer ? context.reqheaders['user-agent'] : navigator.userAgent
}