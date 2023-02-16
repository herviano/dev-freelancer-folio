import { Fragment } from "react";
import { styled, SxProps } from "@mui/material";
import { Link } from "react-router-dom";
import { USER_PAGES } from "../routes/path";

const Image = styled("img")(() => ({
  objectFit: "contain"
}));
interface Props {
  disableLink?: boolean,
  sx? : SxProps,
};

function Logo({disableLink = false, sx = {}}: Props) {

  const logo = (
    <Fragment>
      <Image sx={{width: 40, height: 40, ...sx}} src="/images/logoB.png" alt="Logo" width="100%" height="100%"/>
    </Fragment>
  );

  if (disableLink) {
    return logo;
  }

  return <Link to={USER_PAGES.home}>{logo}</Link>;
}

export default Logo;
