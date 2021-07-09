//this is not actually a hook but i just put it here looks organized

function getViewPort() {
  var width: number = 0;
  var height: number = 0;

  // for browsers that support window like new ones
  if (typeof window.innerWidth != "undefined") {
    (width = window.innerWidth), (height = window.innerHeight);
  }

  // for internet explorer 6 in compatible mode
  else if (
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.clientWidth != "undefined" &&
    document.documentElement.clientWidth != 0
  ) {
    (width = document.documentElement.clientWidth),
      (height = document.documentElement.clientHeight);
  }

  // for old browsers no one uses
  else {
    (width = document.getElementsByTagName("body")[0].clientWidth),
      (height = document.getElementsByTagName("body")[0].clientHeight);
  }

  return [width, height];
}

export const uniqueFunction = (/* image:any */) => {
  const aspectRatio = 1; /* image.width / image.height */
  if (typeof window != "undefined") {
    const viewPortDimensions = getViewPort();
    const height = viewPortDimensions[1] - 160; // set image height equal to viewport height - space for navbar and padding
    const width = height * aspectRatio + viewPortDimensions[0] / 100; // set image width according to original aspect ration of image + space for i don't know, also doesn't matter as image width can't excede column width of grid
    return [width, height];
  }
};
