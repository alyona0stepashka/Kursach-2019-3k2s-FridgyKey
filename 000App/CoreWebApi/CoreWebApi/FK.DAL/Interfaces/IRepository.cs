using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FK.DAL.Interfaces
{
    public interface IRepository<TEntity, TKey>
    {
        Task<IEnumerable<TEntity>> Get();
        Task<TEntity> Get(TKey id);
        Task<IEnumerable<TEntity>> Get(Func<TEntity, bool> predicate);

        Task<TEntity> Add(TEntity entity);
        Task<TEntity> Update(TEntity entity);
        Task<TEntity> Delete(TEntity entity);
        IQueryable<TEntity> Query();
    }
}
