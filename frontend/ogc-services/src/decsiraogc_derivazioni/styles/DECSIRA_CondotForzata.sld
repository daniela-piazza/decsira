<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd"
  xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <NamedLayer>
    <Name>DECSIRA_CondotForzata</Name>
    <UserStyle>
      <Title>red line dash</Title>
      <FeatureTypeStyle>
        <Rule>
          <Title> Tratti di condotta forzata</Title>
          <MaxScaleDenominator>100000</MaxScaleDenominator> 
           <LineSymbolizer>
         <Stroke>
           <CssParameter name="stroke">#ff0000</CssParameter>
           <CssParameter name="stroke-width">1</CssParameter>
         </Stroke>
       </LineSymbolizer>
       <LineSymbolizer>
         <Stroke>
           <CssParameter name="stroke">#ff0000</CssParameter>
           <CssParameter name="stroke-width">3</CssParameter>
           <CssParameter name="stroke-dasharray">3 9</CssParameter>
         </Stroke>
       </LineSymbolizer>
     </Rule>
     </FeatureTypeStyle>
    </UserStyle>    
  </NamedLayer>
</StyledLayerDescriptor>