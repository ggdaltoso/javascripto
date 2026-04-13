import { KEYWORDS, METHODS } from './constants';

interface FeatureTableProps {
  onHide: () => void;
}

export function FeatureTable({ onHide }: FeatureTableProps) {
  return (
    <div className="pg-panel pg-table-panel">
      <div className="pg-panel-header">
        Funcionalidades
        <button className="pg-toggle" onClick={onHide} title="Ocultar">
          ×
        </button>
      </div>
      <div className="pg-table-body">
        <p className="pg-table-section">Keywords</p>
        <table className="pg-table">
          <thead>
            <tr>
              <th>JavaScripto</th>
              <th>JavaScript</th>
            </tr>
          </thead>
          <tbody>
            {KEYWORDS.map((k) => (
              <tr key={k.pt}>
                <td><code>{k.pt}</code></td>
                <td><code>{k.js}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="pg-table-section">Métodos</p>
        <table className="pg-table">
          <thead>
            <tr>
              <th>JavaScripto</th>
              <th>JavaScript</th>
            </tr>
          </thead>
          <tbody>
            {METHODS.map((m) => (
              <tr key={m.pt}>
                <td><code>{m.pt}</code></td>
                <td><code>{m.js}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
