import { sampleFiles } from '../../config/demo';

export function GET() {
  const rows = [
    'record_id,file,folder,status',
    ...sampleFiles.map(
      (file) => `${file.id},${file.filename},clients/${file.id},simulated_download`,
    ),
  ];
  return new Response(rows.join('\r\n') + '\r\n', {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="sample-completion-report.csv"',
      'X-Robots-Tag': 'noindex',
    },
  });
}
