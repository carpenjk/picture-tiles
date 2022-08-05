# picture-tiles
Displays a grid of pictures.


## Overview
This is a reusable component that displays a grid of pictures. This component uses styld-components and is enhanced by the [prop-x](https://github.com/carpenjk/prop-x) library to use responsive properties meaning property values may be provided as an array with a value for each breakpoint.

## Getting started

### install
  ```js
    npm i github:carpenjk/prop-x
  ```

### usage

#### Fixed Number of Columns (using rowHeight)
Set columns to an integer and provide a rowHeight.

**Use Cases**
  --use when you want a specific number of columns no mater what



```js
import { PictureTiles } from 'picture-tiles';
...

// Array of arrays used because this is a responsive prop with an array value
const images = [[
  {
    src:"http://pic1.jpg?460&h=307",
    srcSet:"http://pic1.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic1.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic1.jpg?w=560&h=364 560w, http://pic1.jpg?w=640&h=427 640w, http://pic1.jpg?w=880&h=587 880w",
    sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
    width: 880,height:587,
    alt:"Beach Party",
    rowSpan:1,
    colSpan:1
  },
  {
    src:"http://pic2.jpg?460&h=307",
    srcSet:"http://pic2.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic2.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic2.jpg?w=560&h=364 560w, http://pic2.jpg?w=640&h=427 640w, http://pic2.jpg?w=880&h=587 880w",
    sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
    width: 880,height:587,
    alt:"Beach Party",
    rowSpan:1,
    colSpan:1
  },
  {
    src:"http://pic3.jpg?460&h=307",
    srcSet:"http://pic3.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic3.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic1.jpg?w=560&h=364 560w, http://pic3.jpg?w=640&h=427 640w, http://pic1.jpg?w=880&h=587 880w",
    sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
    width: 880,height:587,
    alt:"Beach Party",
    rowSpan:1,
    colSpan:1
  },
  ... // fill to complete the grid
]]

return (
  <PictureTiles
            
            images={images}
            columns="6"
            minColWidth="150px"
            maxColWidth="1fr"
            rowHeight="250px"
            gridWidth="100%"
            maxGridWidth="1300px"
            imageFit="cover"
            onPhotoClick={handlePhotoClick}
            overlayButton={{
              OverlayButton: (
                <OverlayNavButton onClick={handleLightboxOpen}>
                  More Photos
                </OverlayNavButton>
              ),
            }}
          />
)
          
```

#### Fixed Columns and Rows (using maxGridWidth/gridWidth and gridHeight)

  **Use Cases**
  --when you have a fixed number of columns and rows

```js
import { PictureTiles } from 'picture-tiles';
...

// Array of arrays used because this is a responsive prop with an array value
const images = [[
  {
    src:"http://pic1.jpg?460&h=307",
    srcSet:"http://pic1.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic1.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic1.jpg?w=560&h=364 560w, http://pic1.jpg?w=640&h=427 640w, http://pic1.jpg?w=880&h=587 880w",
    sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
    width: 880,height:587,
    alt:"Beach Party",
    rowSpan:1,
    colSpan:1
  },
  {
    src:"http://pic2.jpg?460&h=307",
    srcSet:"http://pic2.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic2.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic2.jpg?w=560&h=364 560w, http://pic2.jpg?w=640&h=427 640w, http://pic2.jpg?w=880&h=587 880w",
    sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
    width: 880,height:587,
    alt:"Beach Party",
    rowSpan:1,
    colSpan:1
  },
  {
    src:"http://pic3.jpg?460&h=307",
    srcSet:"http://pic3.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic3.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic1.jpg?w=560&h=364 560w, http://pic3.jpg?w=640&h=427 640w, http://pic1.jpg?w=880&h=587 880w",
    sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
    width: 880,height:587,
    alt:"Beach Party",
    rowSpan:1,
    colSpan:1
  },
  ... // fill to complete the grid
]]

return (
  <PictureTiles
            
            images={images}
            columns="6"
            rows="2" // set rows when using gridHeight
            minColWidth="150px"
            maxColWidth="1fr"
            //rowHeight="250px" //rowHeight can be used instead of rows/gridHeight
            gridHeight="500px"
            gridWidth="100%"
            maxGridWidth="1300px"
            imageFit="cover"
            onPhotoClick={handlePhotoClick}
            overlayButton={{
              OverlayButton: (
                <OverlayNavButton onClick={handleLightboxOpen}>
                  More Photos
                </OverlayNavButton>
              ),
            }}
          />
)
          
```



#### Variable number of columns
Set columns to "auto-fit" or "auto-fill" for variable columns.

  **Use Cases**
  --when you want the number of columns to be variable depending on viewport width
	--when the number of images is unknown or variable and you want to add more rows

```js

import { PictureTiles } from 'picture-tiles';
...

// Array of arrays used because this is a responsive prop with an array value
const images = [[
  {
    src:"http://pic1.jpg?460&h=307",
    srcSet:"http://pic1.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic1.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic1.jpg?w=560&h=364 560w, http://pic1.jpg?w=640&h=427 640w, http://pic1.jpg?w=880&h=587 880w",
    sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
    width: 880,height:587,
    alt:"Beach Party",
    rowSpan:1,
    colSpan:1
  },
  {
    src:"http://pic2.jpg?460&h=307",
    srcSet:"http://pic2.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic2.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic2.jpg?w=560&h=364 560w, http://pic2.jpg?w=640&h=427 640w, http://pic2.jpg?w=880&h=587 880w",
    sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
    width: 880,height:587,
    alt:"Beach Party",
    rowSpan:1,
    colSpan:1
  },
  {
    src:"http://pic3.jpg?460&h=307",
    srcSet:"http://pic3.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic3.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic1.jpg?w=560&h=364 560w, http://pic3.jpg?w=640&h=427 640w, http://pic1.jpg?w=880&h=587 880w",
    sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
    width: 880,height:587,
    alt:"Beach Party",
    rowSpan:1,
    colSpan:1
  },
  ... // fill to complete the grid
]]

return (
  <PictureTiles
            
            images={images}
            columns="auto-fit"
            minColWidth="150px"
            maxColWidth="1fr"
            rowHeight="250px"
            gridWidth="100%"
            maxGridWidth="1300px"
            imageFit="cover"
            onPhotoClick={handlePhotoClick}
            overlayButton={{
              OverlayButton: (
                <OverlayNavButton onClick={handleLightboxOpen}>
                  More Photos
                </OverlayNavButton>
              ),
            }}
          />
)
          
```


#### Single image for mobile fixed columns/rows for
  
  **Use Cases**
  -when you only want to display a grid when the display is wide enough

```js
import { PictureTiles } from 'picture-tiles';
...

// Array of arrays used because this is a responsive prop with an array value
const images = [
  [ // only 1 image for mobile
    {
      src:"http://pic1.jpg?460&h=307",
      srcSet:"http://pic1.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic1.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic1.jpg?w=560&h=364 560w, http://pic1.jpg?w=640&h=427 640w, http://pic1.jpg?w=880&h=587 880w",
      sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
      width: 880,height:587,
      alt:"Beach Party",
      rowSpan:1,
      colSpan:1
    },
  ],
  [ // images after first breakpoint
    {
      src:"http://pic1.jpg?460&h=307",
      srcSet:"http://pic1.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic1.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic1.jpg?w=560&h=364 560w, http://pic1.jpg?w=640&h=427 640w, http://pic1.jpg?w=880&h=587 880w",
      sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
      width: 880,height:587,
      alt:"Beach Party",
      rowSpan:1,
      colSpan:1
    },
    {
      src:"http://pic2.jpg?460&h=307",
      srcSet:"http://pic2.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic2.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic2.jpg?w=560&h=364 560w, http://pic2.jpg?w=640&h=427 640w, http://pic2.jpg?w=880&h=587 880w",
      sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
      width: 880,height:587,
      alt:"Beach Party",
      rowSpan:1,
      colSpan:1
    },
    {
      src:"http://pic3.jpg?460&h=307",
      srcSet:"http://pic3.jpg?w=380&h=254&q=80&fit=fill 380w, http://pic3.jpg?w=460&h=307&q=80&fit=fill 460w, http://pic1.jpg?w=560&h=364 560w, http://pic3.jpg?w=640&h=427 640w, http://pic1.jpg?w=880&h=587 880w",
      sizes:"100vw, 100vw, 100vw, 100vw, 100vw",
      width: 880,height:587,
      alt:"Beach Party",
      rowSpan:1,
      colSpan:1
    },
    ... // fill to complete the grid
  ]
]


return (
          <PictureTiles
            images={images}
            columns={["1","6"]}
            minColWidth={['320px', '150px']}
            maxColWidth={['100%', '1fr']}
            rowHeight={['auto', '250px']}
            gridWidth={['100%']}
            maxGridWidth={['1300px']}
            imageFit={['contain', 'cover']}
            onPhotoClick={handlePhotoClick}
            overlayButton={{
              OverlayButton: (
                <OverlayNavButton onClick={handleLightboxOpen}>
                  More Photos
                </OverlayNavButton>
              ),
            }}
          />
)
          
```

## API
### Overview

| Property                  	| Usage                    	| Is Responsive? 	|
|---------------------------	|--------------------------	|----------------	|
| images                    	| required                 	| Y              	|
| columns                   	| required                 	| Y              	|
| rows                      	| required with gridHeight 	| Y              	|
| gridHeight \|\| rowHeight 	| required                 	| Y              	|
| gridWidth                 	| as needed                	| Y              	|
| maxGridWidth              	| as needed                	| Y              	|
| columnWidth               	| as needed                	| Y              	|
| minColWidth               	| as needed                	| Y              	|
| maxColWidth               	| as needed                	| Y              	|
| imageFit                  	| as needed                	| Y              	|
| onPhotoClick              	| optional                 	| N              	|
| overlayButton             	| optional                 	| N              	|


### Responsive Properties
Responsive properties can have a single value or contain an array of values. properties with an array as a base value must be wrapped in an array (i.e. [[val1, val2]]). For these properties to work, they must also be passed a set of breakpoints in as part of the theme prop in styled components. See [prop-x](https://github.com/carpenjk/prop-x) for this documentation.

### images
The images property requires an array of image objects containing standard img element properties and the grid spans for the image.

```js
  images={[
    [
      {
      src: "", 
      srcSet: "",
      sizes: "",
      width: "",
      height: "",
      rowSpan: "",  // or integer
      colSpan: "", // or integer
      }
    ],
    ...
  ]}
```
### columns
The columns property sets the number of grid columns or defines it's auto-sizing value (i.e. "auto-fit" and "auto-fill").

```js
//acceptable values ex.
  columns="6"
  
  columns = 6

  columns="auto-fill" 

  columns="auto-fit"

  columns={[3, "auto-fit"]}
```


### rows
The rows property sets the number of grid rows.  It is used to hard code the number of rows and is required when using gridHeight.

### gridHeight
The gridHeight property sets the height of the grid with any valid css size string.

```js
//acceptable values ex.
  gridHeight="500px"

  gridHeight={["100vh", "70vh"]}
```

### gridWidth
The gridWidth property sets the width of the grid with any valid css size string.

```js
//acceptable values ex.
  gridWidth="100%"

  gridWidth={["100%", "800px"]}
```

### maxGridWidth
The maxGridWidth property sets the maximum grid width with any valid css size string.

```js
//acceptable values ex.
  maxGridWidth="1300px"

  maxGridWidth={["100%", "1300px"]}
```

### columnWidth
The columnWidth property sets the row heights in the grid with any valid css grid track size string including a length, percentage, or fraction of free space..

```js
//acceptable values ex.
  columnWidth="130px"

  columnWidth={["10%", "200px"]}
  
  columnWidth={["130px", "1fr"]}
```

### minColWidth
The minColWidth property sets the minimum column width with any valid css grid track size string including a length, percentage, or fraction of free space.

```js
//acceptable values ex.
  minColWidth="130px"

  minColWidth={["130px", "15%"]}
```


### maxColWidth
The maxColWidth property sets the minimum column width with any valid css grid track size string including a length, percentage, or fraction of free space.

```js
//acceptable values ex.
  maxColWidth="130px"

  maxColWidth={["130px", "200px"]}
  
  maxColWidth={["130px", "1fr"]}
```
### rowHeight
The rowHeight property sets the row heights in the grid  with any valid css grid track size string including a length, percentage, or fraction of free space.

```js
//acceptable values ex.
  rowHeight="250px"

  rowHeight={["100px", "250px"]}
```

### onPhotoClick
The onPhotoClick property sets the action that is performed when a photo is has an onClick event. The index of the image is passed into the function.

```js

  function handlePhotoClick(i){
    //do something
  }

  onPhotoClick={handlePhotoClick}
```

### overlayButton
The overlayButton property is a component representing a button which is overlayed onto the grid. A common usage would be to open a lightbox of larger images.

```js
  overlayButton={{
              OverlayButton: (
                <OverlayNavButton onClick={handleLightboxOpen}>
                  More Photos
                </OverlayNavButton>
              ),
            }}
```