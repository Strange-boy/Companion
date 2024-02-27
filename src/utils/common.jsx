//in order to store all the utility like pictures

export const NETFLIX_BG_IMG =
	"https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const HEADER_LOGO =
	"https://imgs.search.brave.com/iXEzq5X74gUS4HBNveDT-Z4y2TcKc9tt31_LNtyjfDQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzMyMTI3NC9p/c29sYXRlZC9wcmV2/aWV3LzcxMWRiZDM3/Zjk2MTcwYjU4MzJk/MjAxZTg4YjU5Nzg3/LW1vdmllLXRpY2tl/dHMtaWNvbi5wbmc";

export const NETFLIX_FORGOT_PASSWORD_IMG =
	"https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg";

//custom image to be shown in user profile
export const DEFAULT_USER_IMAGE =
	"https://imgs.search.brave.com/lAwI4kVWDbKfA5jrMIbGtnZhzL3VdY5M44h34w_ofiA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbmV0ZmxpeC1w/cm9maWxlLXBpY3R1/cmVzLXczbHFyNjFx/ZTU3ZTl5dDguanBn";

//tmdb options
export const TMDB_NOW_PLAYING =
	"https://api.themoviedb.org/3/movie/now_playing?page=1";

export const TMDB_MOVIES_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
	},
};
