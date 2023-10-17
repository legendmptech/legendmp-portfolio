import React from "react";
import { Link } from "@nextui-org/react";

function TemplateFooter(props) {
  return (
    <footer>
      <div>
        <div justify="center">
          <div>
            <p>Connect with me:</p>
            <div>
              <Link
                href="https://github.com/s-mohan-prasath"
                target="_blank"
                rel="noopener noreferrer"
                isBlock
                showAnchorIcon
                color="secondary"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/s-mohan-prasath"
                target="_blank"
                rel="noopener noreferrer"
                isBlock
                showAnchorIcon
                color="secondary"
              >
                LinkedIn
              </Link>
              {/* Add more social media links as needed */}
            </div>
          </div>
        </div>
        <div justify="center">
          <div>
            <p>
              &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TemplateFooter;
