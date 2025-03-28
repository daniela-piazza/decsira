<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>

    <Name>Geometrie Puntuali VIA</Name>

    <UserStyle>
      <Name>Concentric Circle</Name>
      <Title>VIA Geometrie Puntuali</Title>
      <Abstract>A style with two concentric circles</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <Name>VIA Geometrie Puntuali</Name>
          <Abstract>Grass style that uses a texture</Abstract>
		  <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#a7d100</CssParameter>
                    <CssParameter name="fill-opacity">1</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#4d4d4d</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>
                   </Stroke>
                </Mark>
              <Size>6</Size>
          </Graphic>
        </PointSymbolizer>  
		</Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>