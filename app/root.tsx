
import { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useNavigate,
  useRouteError,
} from "@remix-run/react";
import tailwindStyles from '~/tailwind.css'
import baseStyles from '~/styles/base.css'
// export const links = () => [
//   ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
// ];

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: baseStyles },
  ]
}

export default function App() {
  const loaderr = useLoaderData<typeof loader>()
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}




export const meta: MetaFunction = _ => {
  return [
    {
      title: 'Capacity X',
    },
  ]
}


export function ErrorBoundary() {
  const error = useRouteError()
  const page = useLocation()


  const current_url = page.pathname.split('/')
  const previous_page_url = [...current_url.slice(0, current_url.length - 1)].join('/')

  
  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    const client: boolean = error.status >= 400 && error.status < 500
    const props = client ? { status: error.status } : {}

  }

    return (
      <div className="w-full h-screen bg-red-500 text-white font-mono">
        <p className="">
          {`Oops! An error occured ${error?.data} `}
        </p>

        <Link
          className="
            px-4
            py-2
            text-center
            text-4xl
            font-bold
            text-gray-600
            hover:rounded-md
            hover:bg-gray-100"
          to={previous_page_url}
        >
          Go back?
        </Link>
      </div>
    )
  }
