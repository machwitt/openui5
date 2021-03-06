/*!
 * ${copyright}
 */

// Provides default renderer for control sap.ui.unified.Menu
sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
	"use strict";


	
	/**
	 * @class Currency renderer.
	 *
	 * @version ${version}
	 * @static
	 */
	var CurrencyRenderer = {
	};
	
	/**
	 * Renders the HTML for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager}
	 *            oRenderManager The RenderManager that can be used for writing to the render-output-buffer.
	 * @param {sap.ui.core.Control}
	 *            oMenu An object representation of the control that should be rendered
	 */
	CurrencyRenderer.render = function(oRm,oCurrency) {
		oRm.write("<div");
		oRm.writeControlData(oCurrency);
		oRm.addClass("sapUiUfdCurrency");
		if (!oCurrency._hasValue()) {
			oRm.addClass("sapUiUfdCurrencyNoVal");
		}
		oRm.writeClasses();
		oRm.write(">");
		oRm.write("<div");
		oRm.addClass("sapUiUfdCurrencyAlign");
		oRm.writeClasses();
		oRm.write(">");
		oRm.write("<span");
		oRm.addClass("sapUiUfdCurrencyValue");
		oRm.writeClasses();
		oRm.write(">");
		oRm.writeEscaped(oCurrency.getFormattedValue());
		oRm.write("</span>");
		oRm.write("<span");
		oRm.addClass("sapUiUfdCurrencyCurrency");
		oRm.writeClasses();
		oRm.write(">");
		if (oCurrency.getUseSymbol()) {
			oRm.writeEscaped(oCurrency.getCurrencySymbol());
		} else {
			oRm.writeEscaped(oCurrency.getCurrency());
		}
		oRm.write("</span>");
		oRm.write("</div>");
		oRm.write("</div>");
	};

	return CurrencyRenderer;

}, /* bExport= */ true);
