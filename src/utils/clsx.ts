type Parts = (string | false | undefined)[]

export default function clsx(...parts: Parts) {
	return parts.filter(Boolean).join(' ')
}
