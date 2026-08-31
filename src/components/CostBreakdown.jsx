import React from 'react';
import { useI18n } from '../context/I18nContext';
import { IndianRupee, Truck, Users, Tag, Package, AlertTriangle, Warehouse } from 'lucide-react';

export default function CostBreakdown({ mandiData }) {
  const { t } = useI18n();

  if (!mandiData) return null;

  return (
    <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-card space-y-4">
      <div className="border-b border-gray-100 pb-3">
        <h3 className="text-base font-extrabold text-gray-900">
          {t('details.financialBreakdown')}
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
          {mandiData.cropName} • {mandiData.quantityKg} kg
        </p>
      </div>

      {/* 1. Gross Revenue */}
      <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-100 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-gray-700 block">
            {t('details.grossRevenue')}
          </span>
          <span className="text-[11px] text-gray-500 font-medium">
            ₹{mandiData.ratePerKg.toFixed(2)} / kg × {mandiData.quantityKg} kg
          </span>
        </div>
        <div className="text-lg font-black text-[#1E5128]">
          ₹{mandiData.grossRevenue.toLocaleString()}
        </div>
      </div>

      {/* 2. Itemized Selling Costs */}
      <div className="space-y-2.5 pt-1">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
          {t('details.itemizedCosts')}
        </span>

        {/* Transport */}
        <div className="flex items-center justify-between text-xs py-1 border-b border-gray-50">
          <span className="flex items-center gap-2 text-gray-700 font-medium">
            <Truck className="w-4 h-4 text-gray-400" />
            <span>{t('analysis.transportCost')} ({mandiData.distanceKm} km)</span>
          </span>
          <span className="font-bold text-rose-700">- ₹{mandiData.transportCost.toLocaleString()}</span>
        </div>

        {/* Labour / Hamali */}
        <div className="flex items-center justify-between text-xs py-1 border-b border-gray-50">
          <span className="flex items-center gap-2 text-gray-700 font-medium">
            <Users className="w-4 h-4 text-gray-400" />
            <span>{t('details.labourCost')}</span>
          </span>
          <span className="font-bold text-rose-700">- ₹{mandiData.labourCost.toLocaleString()}</span>
        </div>

        {/* Mandi Fee */}
        <div className="flex items-center justify-between text-xs py-1 border-b border-gray-50">
          <span className="flex items-center gap-2 text-gray-700 font-medium">
            <Tag className="w-4 h-4 text-gray-400" />
            <span>{t('details.mandiFee')}</span>
          </span>
          <span className="font-bold text-rose-700">- ₹{mandiData.mandiFee.toLocaleString()}</span>
        </div>

        {/* Packaging */}
        <div className="flex items-center justify-between text-xs py-1 border-b border-gray-50">
          <span className="flex items-center gap-2 text-gray-700 font-medium">
            <Package className="w-4 h-4 text-gray-400" />
            <span>{t('details.packaging')}</span>
          </span>
          <span className="font-bold text-rose-700">- ₹{mandiData.packagingCost.toLocaleString()}</span>
        </div>

        {/* Wastage */}
        <div className="flex items-center justify-between text-xs py-1 border-b border-gray-50">
          <span className="flex items-center gap-2 text-gray-700 font-medium">
            <AlertTriangle className="w-4 h-4 text-gray-400" />
            <span>{t('details.wastage')}</span>
          </span>
          <span className="font-bold text-rose-700">- ₹{mandiData.wastageCost.toLocaleString()}</span>
        </div>

        {/* Storage */}
        <div className="flex items-center justify-between text-xs py-1 border-b border-gray-50">
          <span className="flex items-center gap-2 text-gray-700 font-medium">
            <Warehouse className="w-4 h-4 text-gray-400" />
            <span>{t('details.storage')}</span>
          </span>
          <span className="font-bold text-rose-700">- ₹{mandiData.storageCost.toLocaleString()}</span>
        </div>
      </div>

      {/* 3. Total Selling Cost */}
      <div className="bg-rose-50/80 p-3 rounded-2xl border border-rose-100 flex items-center justify-between">
        <span className="text-xs font-bold text-rose-900">
          {t('details.totalCost')}
        </span>
        <div className="text-base font-black text-rose-800">
          - ₹{mandiData.totalCost.toLocaleString()}
        </div>
      </div>

      {/* 4. Final Net Profit */}
      <div className="bg-gradient-to-br from-[#EBF7EE] to-[#C8E6C9] p-4 rounded-2xl border-2 border-[#2E7D32] flex items-center justify-between shadow-sm">
        <div>
          <span className="text-xs font-bold text-[#1E5128] uppercase tracking-wider block">
            {t('details.netProfit')}
          </span>
          <span className="text-[10px] text-gray-600 font-medium">
            (सकल राजस्व − समस्त वास्तविक लागत)
          </span>
        </div>
        <div className="text-2xl font-black text-[#1B5E20]">
          ₹{mandiData.detailedNetReturn.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
