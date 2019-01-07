import React, { Component } from "react";
import { Link } from "../../link";

export class DemoLinks extends Component {
  render() {
    return (
      <div className="bg-white shadow p-8">
        <h3 className='text-center text-3xl mb-2 font-thin'>Example Demo links</h3>
        <div className='spd-xy-15 flex-wrap flex justify-center'>

          <Link route={"github-md-js"} className='btn btn-sm btn-blue font-bold'>
            Github Markdown viewer ( remote js )
          </Link>

          <Link route={"github-md-npm"} className='btn btn-sm btn-blue font-bold'>
            Github Markdown viewer ( npm )
          </Link>

          <Link route={"github-md-ssr"} className='btn btn-sm btn-blue font-bold'>
            Github Markdown viewer ( ssr )
          </Link>

        </div>
        <div className='spd-xy-15 flex-wrap flex justify-center'>
          <Link route='https://github.com/me-io/nextjs-starter' className='btn btn-sm btn-black text-white font-bold' target='_blank' rel='noopener'>
            <i className='fa fa-github' /> Github source repo
          </Link>
        </div>

      </div>
    );
  }
}
