import React, { useState } from 'react';

const shortBiography = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris a diam maecenas sed enim ut sem viverra aliquet.`;

const mediumBiography = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non sodales neque sodales ut etiam sit. Ultrices vitae auctor eu augue ut lectus. Pellentesque sit amet porttitor eget dolor. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Sodales neque sodales ut etiam sit amet. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Sit amet mattis vulputate enim. Diam volutpat commodo sed egestas egestas fringilla. Non quam lacus suspendisse faucibus. Amet nisl suscipit adipiscing bibendum est ultricies integer. Faucibus pulvinar elementum integer enim. Accumsan sit amet nulla facilisi morbi tempus iaculis.`;

const longBiography = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Etiam tempor orci eu lobortis elementum. Sed risus ultricies tristique nulla aliquet enim tortor at. Proin libero nunc consequat interdum. Sit amet volutpat consequat mauris nunc congue nisi. Fermentum leo vel orci porta non pulvinar neque laoreet. Dolor sit amet consectetur adipiscing. Id volutpat lacus laoreet non curabitur. Non odio euismod lacinia at quis risus. Sem integer vitae justo eget magna fermentum iaculis eu non. Placerat orci nulla pellentesque dignissim. Leo in vitae turpis massa sed elementum. Metus aliquam eleifend mi in. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Ac felis donec et odio pellentesque diam volutpat commodo sed. Eleifend quam adipiscing vitae proin sagittis.

Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Amet est placerat in egestas erat imperdiet sed euismod. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Molestie at elementum eu facilisis sed odio morbi quis. Nibh venenatis cras sed felis eget velit aliquet sagittis. Elementum sagittis vitae et leo duis ut diam quam. Nullam non nisi est sit amet facilisis. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Nulla porttitor massa id neque. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Malesuada fames ac turpis egestas. Egestas pretium aenean pharetra magna ac placerat vestibulum. Cras ornare arcu dui vivamus arcu felis bibendum. Vel orci porta non pulvinar. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Leo vel orci porta non pulvinar neque. Scelerisque viverra mauris in aliquam sem fringilla ut.`;

const biographies = {
  english: {
    short: shortBiography,
    medium: mediumBiography,
    long: longBiography,
  },
  dutch: {
    short: shortBiography,
    medium: mediumBiography,
    long: longBiography,
  },
};

function Index(props) {
  const [language, setLanguage] = useState('english');
  const [length, setLength] = useState('medium');

  let biography = mediumBiography;

  if (biographies[language] && biographies[language][length]) {
    biography = biographies[language][length];
  }

  return (
    <div className="m-8 lg:m-24">
      <h1 className="text-5xl font-bold text-gray-900">dwag.io</h1>
      <h2 className="text-2xl font-medium text-gray-700">
        Aric Hasting makes the web go
      </h2>
      <div className="mt-8 flex flex-col items-start md:flex-row-reverse md:justify-end">
        <div className="bg-gray-300 rounded-lg p-4 flex flex-row mb-4 md:mb-0 md:ml-8">
          <div>
            <div className="text-lg" id="language-label">
              Language
            </div>
            <ul role="radiogroup" aria-labelledby="language-label">
              <div className="my-1">
                <input
                  type="radio"
                  value="english"
                  id="language-english"
                  name="language"
                  checked={language === 'english'}
                  onChange={(e) => setLanguage(e.target.value)}
                />
                <label className="mx-2" for="english">
                  English
                </label>
              </div>
              <div className="my-1">
                <input
                  type="radio"
                  value="dutch"
                  id="language-dutch"
                  name="language"
                  checked={language === 'dutch'}
                  onChange={(e) => setLanguage(e.target.value)}
                />
                <label className="mx-2" for="dutch">
                  Dutch
                </label>
              </div>
            </ul>
          </div>

          <div className="ml-8 ">
            <div className="text-lg" id="length-label">
              Length
            </div>
            <ul role="radiogroup" aria-labelledby="length-label">
              <div className="my-1">
                <input
                  type="radio"
                  value="short"
                  id="length-short"
                  name="length"
                  checked={length === 'short'}
                  onChange={(e) => setLength(e.target.value)}
                />
                <label className="mx-2" for="length-short">
                  Short
                </label>
              </div>
              <div className="my-1">
                <input
                  type="radio"
                  value="medium"
                  id="length-medium"
                  name="length"
                  checked={length === 'medium'}
                  onChange={(e) => setLength(e.target.value)}
                />
                <label className="mx-2" for="length-medium">
                  Normal
                </label>
              </div>
              <div className="my-1">
                <input
                  type="radio"
                  value="long"
                  id="length-long"
                  name="length"
                  checked={length === 'long'}
                  onChange={(e) => setLength(e.target.value)}
                />
                <label className="mx-2" for="length-long">
                  Long
                </label>
              </div>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800">Bio</h3>
          <p className="text-base text-gray-800 mt-3 whitespace-pre-line md:max-w-md">
            {biography}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800">Social Links</h3>
        <div className="flex flex-row mt-3">
          <a href="https://github.com/dwagio" className="h-12 w-12 mr-4">
            <img
              className="w-12 h-12"
              src="/svg/github-square-brands.svg"
              alt="Github"
            />
          </a>
          <a href="mailto:arichasting@gmail.com" className="h-12 w-12 mx-4">
            <img
              className="w-12 h-12"
              src="/svg/envelope-square-solid.svg"
              alt="Email"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aric-hasting-6002a161/"
            className="h-12 w-12 mx-4"
          >
            <img
              className="w-12 h-12"
              src="/svg/linkedin-brands.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Index;
