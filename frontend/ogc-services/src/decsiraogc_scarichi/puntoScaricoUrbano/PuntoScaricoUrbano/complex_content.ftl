<table class="featureInfo">
  <caption class="featureInfo">Punti di scarico urbano</caption>
  <#list features as feature>
    <tr>
      <th>Provincia scarico</th>
	  <th>Comune scarico</th>
	  <th>Codice regionale scarico</th>
	  <th>Tipo recettore</th>
	  <th>Denominazione recettore</th>
    </tr>
    <tr>
      <td>${feature.desProvincia.value}</td>
	  <td>${feature.desComune.value}</td>
	  <td>${feature.codiceRegionaleScarico.value}</td>
	  <td>${feature.desTipoRecettore.value}</td>
	  <td>${feature.denominazioneRecettore.value}</td>
    </tr>
  </#list>
</table>