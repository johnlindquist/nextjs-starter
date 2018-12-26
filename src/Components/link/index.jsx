import React from "react";
import { router } from "app/routes";
import { PropTypes, PureComponent } from "../framework";

const RouterLink = router.Link;

export class Link extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    route: PropTypes.string.isRequired,
    params: PropTypes.object,
    className: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string
  };

  render() {
    return (
      <>
        <RouterLink params={this.props.params} route={this.props.route}>
          <a target={this.props.target} title={this.props.title}>
            <span className={this.props.className}>
            {this.props.children}
            </span>
          </a>
        </RouterLink>
      </>
    );
  }
}
