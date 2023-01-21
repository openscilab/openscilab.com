interface Window {
	logs?: boolean;
	user_token?: string;
	server_health?: boolean;
}

declare module '*.mp4' {
	const src: string;
	export default src;
}

type SUG<T extends string = string> = T | (string & {});

type OBJECT<T = any> = Record<string | number | symbol, T>;

type EndsWith<T, U extends string> = T extends `${any}${U}` ? T : U;

type StartsWith<T, U extends string> = T extends `${U}${any}` ? T : U;

type Includes<T, U extends string> = T extends `${any}${U}${any}` ? T : U;
